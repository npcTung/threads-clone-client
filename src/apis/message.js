import axiosConfig, { endpoints } from "@/lib/axiosConfig";

export const sendMessage = (data) =>
  axiosConfig({
    url: endpoints.messages.sendMessage,
    method: "POST",
    data,
  });

export const sendMedias = (data) =>
  axiosConfig({
    url: endpoints.messages.sendMedias,
    method: "POST",
    data,
  });

export const sendAudio = (data) =>
  axiosConfig({
    url: endpoints.messages.sendAudio,
    method: "POST",
    data,
  });

export const sendDocument = (data) =>
  axiosConfig({
    url: endpoints.messages.sendDocument,
    method: "POST",
    data,
  });

export const sendGiphy = (data) =>
  axiosConfig({
    url: endpoints.messages.sendGiphy,
    method: "POST",
    data,
  });

export const getAllMessages = (conversationId, params) =>
  axiosConfig({
    url: endpoints.messages.getMessages + conversationId,
    method: "GET",
    params,
  });

export const markAsReadMessage = () =>
  axiosConfig({
    url: endpoints.messages.markAsRead,
    method: "PUT",
  });
