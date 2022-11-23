const API_END_POINT = "https://kdt-frontend.todo-api.programmers.co.kr/roto";

export const request = async (url) => {
  try {
    const res = await fetch(`${API_END_POINT}${url}`);

    if (!res.ok) {
      throw new Error("API 호출 오류");
    }

    return await res.json();
  } catch (e) {
    alert(e.message);
  }
};
