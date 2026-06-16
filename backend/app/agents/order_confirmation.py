import requests

from app.services.voice_provider import VoiceProvider


class OrderConfirmationAgent:

    def __init__(self):
        self.voice = VoiceProvider()

    def start(self, order: dict):

        self.voice.call(
            phone=order["phone"],
            message="""
Hello.
Press 1 to confirm.
Press 2 to cancel.
"""
        )

        return {
            "success": True
        }

    def confirm(self, order_id: int):

        requests.patch(
            f"http://localhost:3000/api/orders/{order_id}/status",
            json={
                "status": "CONFIRMED",
                "callStatus": "COMPLETED"
            }
        )

        return {
            "success": True
        }

    def cancel(self, order_id: int):

        requests.patch(
            f"http://localhost:3000/api/orders/{order_id}/status",
            json={
                "status": "CANCELLED",
                "callStatus": "COMPLETED"
            }
        )

        return {
            "success": True
        }