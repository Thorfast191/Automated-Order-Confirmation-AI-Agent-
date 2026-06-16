class VoiceProvider:

    def call(
        self,
        phone: str,
        message: str,
    ):
        print(f"Calling {phone}")
        print(message)