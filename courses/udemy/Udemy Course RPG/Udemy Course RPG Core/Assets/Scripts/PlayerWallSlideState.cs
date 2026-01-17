using UnityEngine;

public class PlayerWallSlideState : EntityState
{
    public PlayerWallSlideState(Player player, StateMachine stateMachine, string animatorBoolName) : base(player, stateMachine, animatorBoolName)
    {
    }

    public override void Update()
    {
        base.Update();
        HandleWallSlide();

        if (player.input.Player.Jump.WasPressedThisFrame())
        {
            stateMachine.ChangeState(player.wallJumpState);
        }

        if (player.isWallDetected == false)
        {
            stateMachine.ChangeState(player.fallState);
        }

        if (player.isGroundDetected)
        {
            stateMachine.ChangeState(player.idleState);
            player.Flip();
        }
    }

    private void HandleWallSlide()
    {
        if (player.moveInput.y < 0)
        {
            player.SetVelocity(player.moveInput.x, player.rigidbody2d.linearVelocity.y);
        }
        else
        {
            player.SetVelocity(player.moveInput.x, player.rigidbody2d.linearVelocity.y * player.wallSlideSlowMultiplier);
        }
    }
}
