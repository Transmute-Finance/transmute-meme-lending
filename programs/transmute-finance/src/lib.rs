use anchor_lang::prelude::*;

pub mod instructions;
pub mod state;
pub mod errors;

use instructions::*;

declare_id!("REPLACE_WITH_YOUR_PROGRAM_ID");

#[program]
pub mod transmute_finance {
    use super::*;

    pub fn initialize_user(ctx: Context<InitializeUser>) -> Result<()> {
        instructions::initialize_user::handler(ctx)
    }

    pub fn deposit_usd(ctx: Context<DepositUsd>, amount: u64) -> Result<()> {
        instructions::deposit_usd::handler(ctx, amount)
    }

    pub fn lend_token(ctx: Context<LendToken>, amount: u64) -> Result<()> {
        instructions::lend_token::handler(ctx, amount)
    }
}
