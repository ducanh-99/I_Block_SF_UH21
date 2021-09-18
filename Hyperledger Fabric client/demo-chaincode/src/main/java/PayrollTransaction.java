
import com.owlike.genson.annotation.JsonProperty;
import org.hyperledger.fabric.contract.annotation.DataType;
import org.hyperledger.fabric.contract.annotation.Property;
import java.time.LocalDateTime;


@DataType
public final class PayrollTransaction {

    @Property()
    private final String company;

    @Property()
    private final String employee;

    @Property
    private final String paid_status;

    @Property
    private final LocalDateTime date_time;


    public String getCompany() {
        return company;
    }

    public String getEmployee() {
        return employee;
    }

    public String getStatus() {
        return paid_status;
    }

    public LocalDateTime getDateTime() {
        return date_time;
    }

    public PayrollTransaction(@JsonProperty("company") final String company,
                              @JsonProperty("employee") final String employee,
                              @JsonProperty("paid_status") final String paid_status,
                              @JsonProperty("date_time") final LocalDateTime date_time) {
        this.company = company;
        this.employee = employee;
        this.paid_status = paid_status;
        this.date_time = date_time;
    }
}