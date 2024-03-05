import { Request, Response, NextFunction } from 'express';
export declare class AuthMiddleware {
    use(req: Request, res: Response, next: NextFunction): void;
}
