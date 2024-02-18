import * as SQLite from "expo-sqlite";

const db = SQLite.openDatabase('session.db');

export const insertSession = ({ localId, email, idToken }) => {
  const promise = new Promise((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        "INSERT INTO session (localId ,email ,idToken) VALUES ( ?, ? , ?);",
        [localId, email, idToken],
        (_,result) => resolve(result),
        (_, err) => reject(err)
      );
    });
  });
  return promise;
};

export const fechSession = (localId) => {
  const promise = new Promise((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        'SELECT * FROM sessionUser',
        [localId],
        (_, result) => resolve(result),
        (_, err) => reject(err)
      );
    });
  });
  return promise;
};

export const deleteSession = (localId) => {
    const promise = new Promise((resolve, reject) => {
      db.transaction((tx) => {
        tx.executeSql(
          'DELETE FROM session WHERE localId = ?',
          [localId],
          (_, result) => resolve(result),
          (_, err) => reject(err)
        );
      });
    });
    return promise;
  };

export const deleteAllSession = () => {
  const promise = new Promise((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        "DELETE FROM sessionUser",
        [],
        (_, result) => resolve(result),
        (_, err) => reject(err)
      );
    });
  });
  return promise;
};
