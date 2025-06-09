public delegate void MovementDelegate(
    float inputX,
    float inputY,
    bool isWalking,
    bool isRunning,
    bool isIdle,
    bool isCarrying,
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
    bool isPickingRight,
    bool isPickingLeft,
    bool isPickingoUp,
    bool isPickingDown,
    bool idleRight,
    bool idleLeft,
    bool idleUp,
    bool idleDown
);

public static class EventHandler
{
    // Movement Event
    public static event MovementDelegate MovementEvent;

    // Movement Event Call
    public static void CallMovementEvent(
        float xInput,
        float yInput,
        bool isWalking,
        bool isRunning,
        bool isIdle,
        bool isCarrying,
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
        bool isPickingRight,
        bool isPickingLeft,
        bool isPickingUp,
        bool isPickingDown,
        bool idleRight,
        bool idleLeft,
        bool idleUp,
        bool idleDown
    ) {
        if (MovementEvent != null) {
            MovementEvent(
                xInput,
                yInput,
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
                isPickingRight,
                isPickingLeft,
                isPickingUp,
                isPickingDown,
                idleRight,
                idleLeft,
                idleUp,
                idleDown
            );
        }
    }
}