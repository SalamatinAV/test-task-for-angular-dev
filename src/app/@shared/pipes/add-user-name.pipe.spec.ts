import { AddUserNamePipe } from './add-user-name.pipe';

describe('AddUserNamePipe', () => {
  it('create an instance', () => {
    const pipe = new AddUserNamePipe();
    expect(pipe).toBeTruthy();
  });
});
