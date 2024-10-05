import {
  enablePromise,
  openDatabase,
  SQLiteDatabase,
} from "react-native-sqlite-storage";

enablePromise(true);

export const connectToDatabase = async () => {
  return openDatabase(
    { name: "expenseTracker.db", location: "default" },
    () => {}, //success callback
    (error) => {
      console.error(error);
      throw Error("Could not connect to database");
    }
  );
};

export const createTables = async (db: SQLiteDatabase) => {
  //could be enum
  const currencyTableQuery = `
    CREATE TABLE IF NOT EXISTS Currency (
      id INTEGER DEFAULT 1 AUTOINCREMENT,
      title TEXT,
      symbol TEXT,
      PRIMARY KEY(id)
    )
  `;
  const accountTableQuery = `
    CREATE TABLE IF NOT EXISTS Account (
      id INTEGER DEFAULT 1 AUTOINCREMENT,
      title TEXT,
      balance REAL,
      currency_id INTEGER,
      saving REAL,
      PRIMARY KEY(id),
      FOREIGN KEY(currency_id)
        REFERENCES Currency (id)
        ON DELETE NO ACTION
        ON UPDATE NO ACTION
    )
  `;

  const categoryTypeTableQuery = `
    CREATE TABLE IF NOT EXISTS CategoryType (
      id INTEGER DEFAULT 1 AUTOINCREMENT,
      title TEXT,
      PRIMARY KEY(id)
    )
  `;

  const categoryTableQuery = `
    CREATE TABLE IF NOT EXISTS Category (
      id INTEGER DEFAULT 1 AUTOINCREMENT,
      title TEXT,
      budget REAL,
      type_id INTEGER,
      PRIMARY KEY(id),
      FOREIGN KEY (type_id)
        REFERENCES Category (id)
          ON DELETE NO ACTION
          ON UPDATE NO ACTION
    )
  `;

  //could be enum: Income, Expense, Transfer
  const transactionTypeTableQuery = `
    CREATE TABLE IF NOT EXISTS TransactionType (
      id INTEGER DEFAULT 1 AUTOINCREMENT,
      title TEXT,
      PRIMARY KEY(id)
    )
  `;

  const transactionTableQuery = `
  CREATE TABLE IF NOT EXISTS Transaction (
    id INTEGER DEFAULT 1 AUTOINCREMENT,
    account_id INTEGER,
    amount REAL,
    transaction_type_id INTEGER,
    category_id INTEGER,
    note TEXT,
    related_transaction_id INTEGER,
    created_on_date TEXT,
    PRIMARY KEY(id),
    FOREIGN KEY(account_id)
      REFERENCES Account (id)
        ON DELETE NO ACTION
        ON UPDATE NO ACTION,
    FOREIGN KEY(transaction_type_id)
      REFERENCES TransactionType (id)
        ON DELETE NO ACTION
        ON UPDATE NO ACTION,
    FOREIGN KEY(category_id)
      REFERENCES Category (id)
        ON DELETE NO ACTION
        ON UPDATE NO ACTION,
    FOREIGN KEY(related_transaction_id)
      REFERENCES Transaction (id)
        ON DELETE NO ACTION
        ON UPDATE NO ACTION,
  )
`;

  try {
    await db.executeSql(currencyTableQuery);
    await db.executeSql(accountTableQuery);
    await db.executeSql(categoryTypeTableQuery);
    await db.executeSql(categoryTableQuery);
    await db.executeSql(transactionTypeTableQuery);
    await db.executeSql(transactionTableQuery);
  } catch (error) {
    console.error(error);
    throw Error("Failed to create tables");
  }
};
