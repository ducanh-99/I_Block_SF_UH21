from datetime import date
from app.core.send_email import send_email_background, send_email_change_date
from starlette.background import BackgroundTasks
from app.schemas.sche_payment import PaymentRequest
import schedule

def job():
    f = open("demofile2.txt", "a")
    f.write("Now the file has more content!")
    f.close()

class PaymentSrv():
    def payment(self, background_tasks: BackgroundTasks, payment_request: PaymentRequest):
        schedule.every(5).seconds.do(job)
        
        schedule.run_pending()
        for staff in payment_request.staff:
            body = {
                'name': staff.name,
                'title': 'Thông báo ngày thanh toán',
                'payment_day': payment_request.payment_day.strftime("%d/%m/%Y")
            }
            send_email_background(background_tasks=background_tasks, subject="Thông báo ngày nhận lương", email_to=staff.email, body=body)
        return {}

    def change(self, background_tasks: BackgroundTasks, payment_date: date):
        body = {
                'name': "Nguyen Duc Anh",
                'title': 'Thông báo ngày thanh toán',
                'payment_day': payment_date.strftime("%d/%m/%Y")
            }
        send_email_change_date(background_tasks=background_tasks, subject="Thông báo đổi ngày thanh toán", email_to="ducanhhust99@gmail.com", body=body)

    def payment_with_method(self, payment_method: str):
        pass
