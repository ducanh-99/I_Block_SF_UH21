import com.owlike.genson.Genson;
import org.hyperledger.fabric.contract.Context;
import org.hyperledger.fabric.contract.ContractInterface;
import org.hyperledger.fabric.contract.annotation.*;
import org.hyperledger.fabric.shim.ChaincodeException;
import org.hyperledger.fabric.shim.ChaincodeStub;
import java.time.LocalDateTime;


@Contract(
        name = "Payroll Transactions",
        info = @Info(
                title = "Payroll Transaction",
                description = "A java chaincode",
                version = "0.0.1-SNAPSHOT"))

@Default
public final class PayrollTransactionRepository implements ContractInterface{
    private final Genson genson = new Genson();

    @Transaction()
    public void init(final Context ctx) {
        ChaincodeStub stub = ctx.getStub();
        PayrollTransaction transaction = new PayrollTransaction("I-Block", "Employee Nguyen", "paid", LocalDateTime.now());

        String transactionState = genson.serialize(transaction);
        stub.putStringState("T001", transactionState);
    }


    @Transaction()
    public PayrollTransaction query(final Context ctx, final String key) {
        ChaincodeStub stub = ctx.getStub();
        String transactionState = stub.getStringState(key);

        if (transactionState.isEmpty()) {
            String errorMessage = String.format("Transaction %s does not exist", key);
            System.out.println(errorMessage);
            throw new ChaincodeException(errorMessage, "Transaction not found");
        }

        PayrollTransaction transaction = genson.deserialize(transactionState, PayrollTransaction.class);

        return transaction;
    }

    @Transaction()
    public PayrollTransaction invoke(final Context ctx, final String key, final String company, final String employee,
                                     final String paid_status) {
        ChaincodeStub stub = ctx.getStub();

        String transactionState = stub.getStringState(key);
        if (!transactionState.isEmpty()) {
            String errorMessage = String.format("Transaction %s already exists", key);
            System.out.println(errorMessage);
            throw new ChaincodeException(errorMessage, "Transaction already exists");
        }

        PayrollTransaction transaction = new PayrollTransaction(company, employee, paid_status, LocalDateTime.now());
        transactionState = genson.serialize(transaction);
        stub.putStringState(key, transactionState);

        return transaction;
    }


    @Transaction()
    public PayrollTransaction change(final Context ctx, final String key, final String newStatus) {
        ChaincodeStub stub = ctx.getStub();

        String agreementState = stub.getStringState(key);

        if (agreementState.isEmpty()) {
            String errorMessage = String.format("Agreement %s does not exist", key);
            System.out.println(errorMessage);
            throw new ChaincodeException(errorMessage, "Agreement not found");
        }

        PayrollTransaction transaction = genson.deserialize(agreementState, PayrollTransaction.class);

        PayrollTransaction newTransaction = new PayrollTransaction(transaction.getCompany(), transaction.getEmployee(), newStatus, LocalDateTime.now());
        String newTransactionState = genson.serialize(newTransaction);
        stub.putStringState(key, newTransactionState);

        return newTransaction;
    }

}