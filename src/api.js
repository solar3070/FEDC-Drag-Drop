const API_END_POINT = "https://kdt-frontend.todo-api.programmers.co.kr/roto";

export const request = async (url, options) => {
  try {
    const res = await fetch(`${API_END_POINT}${url}`, options);

    if (!res.ok) {
      throw new Error("API 호출 오류");
    }

    return await res.json();
  } catch (e) {
    alert(e.message);
  }
};
