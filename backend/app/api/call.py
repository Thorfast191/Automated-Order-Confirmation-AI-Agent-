from fastapi import APIRouter

router = APIRouter()

@router.post("/call")
async def call_customer(payload: dict):

    print("\n==========")
    print("NEW ORDER CALL")
    print(payload)
    print("==========\n")

    return {
        "success": True
    }