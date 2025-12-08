// Direct import from custom Prisma client location
import { PrismaClient } from '../node_modules/.prisma/client/client';
import { PrismaPg } from '@prisma/adapter-pg';
import { Pool } from 'pg';
import dotenv from 'dotenv';

dotenv.config();

export const pool = new Pool({
  connectionString: process.env.DATABASE_URL!,
});

export const adapter = new PrismaPg(pool);
export const prisma = new PrismaClient({ adapter });

export default prisma;

