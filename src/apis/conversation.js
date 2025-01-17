import axiosConfig, { endpoints } from "@/lib/axiosConfig";

export const getAllConversations = (params) =>
  axiosConfig({
    url: endpoints.conversations.getConversations,
    method: "GET",
    params,
  });

export const getConversation = (recipientId) =>
  axiosConfig({
    url: endpoints.conversations.getConversation + recipientId,
    method: "GET",
  });

export const updateNameConversation = (conversationId, data) =>
  axiosConfig({
    url: endpoints.conversations.updateNameConversation + conversationId,
    method: "PUT",
    data,
  });

export const updateParticipant = (conversationId, data) =>
  axiosConfig({
    url: endpoints.conversations.updateParticipant + conversationId,
    method: "PUT",
    data,
  });
