let error = (message: string, code: number) => {
  throw { message, code };
};

error("Error occurdafafred", 200);
