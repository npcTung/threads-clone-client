import * as apis from "@/apis";

export const getAllConversations = async (queriesDebounce, cursor) => {
  try {
    const queries = { ...queriesDebounce, cursor };
    const response = await apis.getAllConversations(queries);
    return {
      conversations: response.data,
      nextCursor: response.nextCursor,
    };
  } catch (error) {
    console.error(error.mes);
  }
};

export const fetchMarkAsRead = async () => {
  const response = await apis.markAsReadMessage();
  if (response.success) {
    return response.success;
  } else {
    console.error(response.mes);
  }
};

export const getAllMessages = async (conversationId, cursor) => {
  const queries = { cursor };
  const response = await apis.getAllMessages(conversationId, queries);
  return {
    messages: response.data,
    nextCursor: response.nextCursor,
  };
};

export const sendMessage = async (data) => {
  const response = await apis.sendMessage(data);
  return response.data;
};

export const sendMessageMedias = async (data) => {
  const { recipients, images } = data;
  const formData = new FormData();
  for (let media of images) formData.append("medias", media);
  const response = await apis.sendMedias(recipients, formData);
  return response.data;
};

export const sendMessageDocument = async (data) => {
  const { recipients, document } = data;
  const formData = new FormData();
  formData.append("document", document);
  const response = await apis.sendDocument(recipients, formData);
  return response.data;
};

export const sendMessageAudio = async (data) => {
  const { recipients, audio } = data;
  const formData = new FormData();
  formData.append("audio", audio);
  const response = await apis.sendAudio(recipients, formData);
  return response.data;
};

export const sendMessageGiphy = async (data) => {
  const response = await apis.sendGiphy(data);
  return response.data;
};

export const getAllUsers = async (queries, cursor) => {
  const objectQueries = { ...queries, cursor };
  try {
    const response = await apis.getUsers(objectQueries);
    return {
      users: response.data,
      nextCursor: response.nextCursor,
    };
  } catch (error) {
    return error;
  }
};

export const updateNameConversation = async (conversationId, data) => {
  const response = await apis.updateNameConversation(conversationId, data);
  return response;
};
