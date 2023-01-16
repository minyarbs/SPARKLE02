import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { SuppliersAccountsService } from './suppliers_accounts.service';

@Controller('suppliers-accounts')
export class SuppliersAccountsController {
    constructor(private readonly ser: SuppliersAccountsService) { }

    @Post('new')
    async postNewAccount(
        @Body('username') username: string,
        @Body('password') password: string,
        @Body('role') role: string,
    ) {
        const generatedID = await this.ser.insertAccount(username, password, role)
        return { id: generatedID }
    }

    @Post('Login')
    async login(
        @Body('username') username: string,
        @Body('password') password: string,
    ) {
        const check = await this.ser.connect(username, password)
        return {role:check}
    }

    @Get('all')
    async getAllAccounts() {
        const acc = await this.ser.getSuppliers();
        return acc
    }

    @Delete(':id')
    async deleteAccount(@Param('id') id: string) {
        await this.ser.deleteAccount(id)
    }
}
