using UnityEngine;

public class PlayerJumpAttackState : EntityState
{
    private bool touchedGround;
    public PlayerJumpAttackState(Player player, StateMachine stateMachine, string animatorBoolName) : base(player, stateMachine, animatorBoolName)
    {

    }

    public override void Enter()
    {
        base.Enter();
        touchedGround = false;

        player.SetVelocity(player.jumpAttackVelocity.x * player.facingDirection, player.jumpAttackVelocity.y);
    }

    public override void Update()
    {
        base.Update();
        if (player.isGroundDetected && touchedGround == false)
        {
            touchedGround = true;
            player.animator.SetTrigger("jumpAttackTrigger");
            player.SetVelocity(0, player.rigidbody2d.linearVelocity.y);
        }

        if (triggerCalled && player.isGroundDetected)
        {
            stateMachine.ChangeState(player.idleState);
        }
    }
}
