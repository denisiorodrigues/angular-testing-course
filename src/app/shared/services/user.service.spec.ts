import { UsersService } from "./users.service";
import { TestBed } from '@angular/core/testing';

describe('UsesService', () => {
    let usersService: UsersService

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [UsersService]
        })

        usersService = TestBed.inject(UsersService)
    })

    it('create a service', () => {
        expect(usersService).toBeTruthy();
    })

    describe('addUser', () => {
        it('should add a user', () => {
            const user = {
                id: '3',
                name: 'foo'
            }
            usersService.addUser(user)
            expect(usersService.users).toEqual([{ id: '3', name: 'foo' }])
        })
    })

    describe('removeUser', () => {
        it('should remove a user',  () => {
            usersService.users = [{ id: '1', name: 'foo' }]
            usersService.removeUser('1')
            expect(usersService.users).toEqual([])
        })
    })
})