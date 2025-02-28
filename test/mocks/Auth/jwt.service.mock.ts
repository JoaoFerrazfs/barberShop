import { JwtService } from '@nestjs/jwt';

export const JwtServiceMock = {
  provide: JwtService,
  useValue: {
    verifyAsync: jest.fn().mockResolvedValue({ user: { userName: 'joao' } }),
    signAsync: jest.fn().mockResolvedValue('12345678'),
  },
};
