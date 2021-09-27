public delegate void MovementDelegate(
    float inputX,
    float inputY,
    bool isWalking,
    bool isRunning,
    bool isIdle,
    bool isCarrying,''
    ToolEffect toolEffect,
    bool isUsingToolRight,
    bool isUsingToolLeft,
    bool isUsingToolUp,
    bool isUsingToolDown,
    bool isLiftingToolRight,
    bool isLiftingToolLeft,
    bool isLiftingToolUp,
    bool isLiftingToolDown,
    bool isSwingingToolRight,
    bool isSwingingToolLeft,
    bool isSwingingToolUp,
    bool isSwingingToolDown,
    bool isIdleRight,
    bool isIdleLeft,
    bool isIdleUp,
    bool isIdleDown,
);

public static class EventHandler
{
    // Movement Event
    public static event MovementDelegate MovementEvent;

    // Movement Event Call
    public static void CallMovement(
        float inputX,
        float inputY,
        bool isWalking,
        bool isRunning,
        bool isIdle,
        bool isCarrying,''
        ToolEffect toolEffect,
        bool isUsingToolRight,
        bool isUsingToolLeft,
        bool isUsingToolUp,
        bool isUsingToolDown,
        bool isLiftingToolRight,
        bool isLiftingToolLeft,
        bool isLiftingToolUp,
        bool isLiftingToolDown,
        bool isSwingingToolRight,
        bool isSwingingToolLeft,
        bool isSwingingToolUp,
        bool isSwingingToolDown,
        bool isIdleRight,
        bool isIdleLeft,
        bool isIdleUp,
        bool isIdleDown
    ) {
        if (MovementEvent != null) {
            MovementEvent(
                inputX,
                inputY,
                isWalking,
                isRunning,
                isIdle,
                isCarrying,
                toolEffect,
                isUsingToolRight,
                isUsingToolLeft,
                isUsingToolUp,
                isUsingToolDown,
                isLiftingToolRight,
                isLiftingToolLeft,
                isLiftingToolUp,
                isLiftingToolDown,
                isSwingingToolRight,
                isSwingingToolLeft,
                isSwingingToolUp,
                isSwingingToolDown,
                isIdleRight,
                isIdleLeft,
                isIdleUp,
                isIdleDown
            );
        }
    }
}