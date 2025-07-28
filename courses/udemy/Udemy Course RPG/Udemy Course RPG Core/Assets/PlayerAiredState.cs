using UnityEngine;

public class PlayerAiredState : EntityState
{
    public PlayerAiredState(Player player, StateMachine stateMachine, string animatorBoolName)
        : base(player, stateMachine, animatorBoolName)
    {
    }

    public override void Update()
    {
        base.Update();

        if (player.moveInput.x != 0)
        {
            player.SetVelocity(player.moveInput.x * (player.moveSpeed * player.inAirMoveMultiplier), player.rigidbody2d.linearVelocity.y);
        }
    }
}
