using UnityEngine;

public class PlayerFallState : PlayerAiredState
{
    public PlayerFallState(Player player, StateMachine stateMachine, string animatorBoolName) : base(player, stateMachine, animatorBoolName)
    {
    }

    public override void Update()
    {
        base.Update();

        if (player.isGroundDetected)
        {
            stateMachine.ChangeState(player.idleState);
        }
    }
}
