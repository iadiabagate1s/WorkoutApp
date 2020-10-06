
export const is_Logged = (log) => {
    return {
      type: 'LOGGED',
      log
    };
  }

export const getinfo= (user)=> {
  return {
    type: 'USER',
    user
  };
}



