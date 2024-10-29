import axios from "axios";

export const formatCurrency = (value) => {
  try {
    if (typeof value === "number") {
      value = value.toString();
    }
    return value.replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  } catch (error) {}
  return 0;
};

export const formatDate = (dateString) => {
  if (!dateString) return "";
  const date = new Date(dateString);
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${day}/${month}/${year}`;
};

export const formatOriginDate = (dateString) => {
  if (!dateString) return "";
  const date = new Date(dateString);
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
};

export const formatDateShort = (dateString) => {
  if (!dateString) return "";
  return new Date(dateString).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "short",
    year: "2-digit",
  });
};

export const formatDateTime = (dateString) => {
  if (!dateString) return "";
  const date = new Date(dateString);
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");
  return `${day}-${month}-${year} ${hours}:${minutes}:${seconds}`;
};

export const limitContent = (content, maxLength = 15) => {
  const words = content?.split(" ");
  if (words?.length > maxLength) {
    return words.slice(0, maxLength).join(" ") + "...";
  } else {
    return content;
  }
};

export const uploadImage = (file): Promise<string> => {
  return new Promise((resolve, reject) => {
    let formData = new FormData();
    formData.append("file", file);
    axios
      .post("https://cdn.nsoplus.com/upload", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((response: any) => {
        resolve(response.url);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

export function toSlug(str) {
  // Chuyển hết sang chữ thường
  str = str.toLowerCase();

  // xóa dấu
  str = str
    .normalize("NFD") // chuyển chuỗi sang unicode tổ hợp
    .replace(/[\u0300-\u036f]/g, ""); // xóa các ký tự dấu sau khi tách tổ hợp

  // Thay ký tự đĐ
  str = str.replace(/[đĐ]/g, "d");

  // Xóa ký tự đặc biệt
  str = str.replace(/([^0-9a-z-\s])/g, "");

  // Xóa khoảng trắng thay bằng ký tự -
  str = str.replace(/(\s+)/g, "-");

  // Xóa ký tự - liên tiếp
  str = str.replace(/-+/g, "-");

  // xóa phần dư - ở đầu & cuối
  str = str.replace(/^-+|-+$/g, "");

  // return
  return str;
}

export const handleErrorResponse = (
  error: any,
  setFieldError: (field: string, message: string | undefined) => void
) => {
  if (error.message) {
    if (Array.isArray(error.message)) {
      error.message.forEach(
        (message: { property: string; message: string }) => {
          if (message) {
            setFieldError(message.property, message.message);
          }
        }
      );
    }
  }
};

export const maskText = (
  text: string | number,
  start: number,
  end: number,
  mask: string = "*"
) => {
  if (!text) return "";
  if (typeof text === "number") text = text.toString();
  return (
    text.slice(0, start) +
    mask.repeat(text.length - start - end) +
    text.slice(text.length - end)
  );
};

export const capitalize = (text: string) => {
  return text[0]?.toUpperCase() + text.slice(1);
};
