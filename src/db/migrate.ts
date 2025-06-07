import {db} from './index'
import {migrate} from 'drizzle-orm/neon-http/migrator'

const main = async () => {
    try {
        await migrate(db, { migrationsFolder: 'src/db/migrations' });
        console.log('Database migration completed successfully.');
        
    } catch (error) {
        console.log('Database migration failed:', error);
        process.exit(1); // Exit with failure code
    }
}

main()