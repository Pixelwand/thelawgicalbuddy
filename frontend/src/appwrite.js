import { Client, Account } from 'appwrite';
import { redirect } from 'react-router-dom';
const endPoint = process.env.APPWRITE_END_POINT;
const projectId = process.env.APPWRITE_PROJECT_ID

const client = new Client();


client
  .setEndpoint('https://cloud.appwrite.io/v1') // Your API Endpoint
  .setProject('642b1b7a10d1a74f5935'); // Your project ID


export const getUserData = async () => {
  try {
    const account = new Account(client)
    return account.get()
  } catch (error) {
    const appwriteError = error;
    throw new Error(appwriteError.message)
  }
}

export const login = async (email, password) => {
  try {
    const account = new Account(client)
    return account.createEmailSession(email, password)
  } catch (error) {
    const appwriteError = error;
    throw new Error(appwriteError.message)
  }
}

export const logout = async () => {
  try {
    const account = new Account(client)
    return account.deleteSession('current')
  } catch (error) {
    const appwriteError = error;
    throw new Error(appwriteError.message)
  }
}

export const register = async (email, password) => {
  try {
    const account = new Account(client)
    return account.create('unique()', email, password)
  } catch (error) {
    const appwriteError = error;
    throw new Error(appwriteError.message)
  }
}

export const googleAuth = async (email) => {
  try {
    const account = new Account(client);
    return account.createOAuth2Session('google', "http://localhost:3000");

  }
  catch (error) {
    const appwriteError = error;
    throw new Error(appwriteError.message)
  }
}

export default client;
