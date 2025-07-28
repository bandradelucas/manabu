using UnityEngine;

public class PlayerMoveState : PlayerGroundedState
{
    public PlayerMoveState(
            Player player,
            StateMachine stateMachine,
            string stateName
        ) : base(
            player,
            stateMachine,
            stateName
        )
    {
    }

    public override void Update()
    {
        base.Update();

        if (player.moveInput.x == 0)
        {
            stateMachine.ChangeState(player.idleState);
        }

        player.SetVelocity(player.moveInput.x * player.moveSpeed, player.rigidbody2d.linearVelocity.y);
    }
}
