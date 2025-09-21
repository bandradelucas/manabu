using Unity.VisualScripting;
using UnityEngine;

public class PlayerDashState : EntityState
{
    private float originalGravityScale;
    private int dashDirection;1

    public PlayerDashState(Player player, StateMachine stateMachine, string animatorBoolName) : base(player, stateMachine, animatorBoolName)
    {
    }

    public override void Enter()
    {
        base.Enter();

        dashDirection = player.facingDirection;
        stateTimer = player.dashDuration;

        originalGravityScale = player.rigidbody2d.gravityScale;
        player.rigidbody2d.gravityScale = 0;
    }

    public override void Update()
    {
        base.Update();
        CancelDashIfNeeded();

        player.SetVelocity(player.dashSpeed * dashDirection, 0);

        if (stateTimer < 0)
        {
            if (player.isGroundDetected)
            {
                stateMachine.ChangeState(player.idleState);
            }
            else
            {
                stateMachine.ChangeState(player.fallState);
            }
        }
    }

    public override void Exit()
    {
        base.Exit();
        player.SetVelocity(0, 0);
        player.rigidbody2d.gravityScale = originalGravityScale;
    }

    private void CancelDashIfNeeded()
    {
        if (player.isWallDetected)
        {
            if (player.isGroundDetected)
            {
                stateMachine.ChangeState(player.idleState);
            }
            else
            {
                stateMachine.ChangeState(player.wallSlideState);
            }
        }
    }
}
