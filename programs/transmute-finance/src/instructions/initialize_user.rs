use anchor_lang::prelude::*;
use crate::state::UserAccount;

#[derive(Accounts)]
pub struct InitializeUser<'info> {
    #[account(
        init,
        payer = user,
        space = 8 + 32 + 8
    )]
    pub user_account: Account<'info, UserAccount>,

    #[account(mut)]
    pub user: Signer<'info>,

    pub system_program: Program<'info, System>,
}

pub fn handler(ctx: Context<InitializeUser>) -> Result<()> {
    let user_account = &mut ctx.accounts.user_account;
    user_account.owner = ctx.accounts.user.key();
    user_account.deposited_usd = 0;
    Ok(())
}
