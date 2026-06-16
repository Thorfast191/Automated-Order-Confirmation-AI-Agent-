from fastapi import APIRouter
from app.agents.order_confirmation import OrderConfirmationAgent

router = APIRouter()

agent = OrderConfirmationAgent()


@router.post("/call")
async def call_customer(payload: dict):
    return agent.start(payload)


@router.post("/confirm/{order_id}")
async def confirm_order(order_id: int):
    return agent.confirm(order_id)


@router.post("/cancel/{order_id}")
async def cancel_order(order_id: int):
    return agent.cancel(order_id)