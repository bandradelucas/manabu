using UnityEngine;

public class PlayerGroundedState : EntityState
{
    public PlayerGroundedState(
            Player player,
            StateMachine stateMachine,
            string animatorBoolName
        ) : base(
            player,
            stateMachine,
            animatorBoolName
        )
    {
    }

    public override void Update()
    {
        base.Update();

        if (player.rigidbody2d.linearVelocity.y < 0)
        {
            stateMachine.ChangeState(player.fallState);
        }

        if (player.input.Player.Jump.WasPressedThisFrame())
        {
            stateMachine.ChangeState(player.jumpState);
        }
    }
}
