import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IProjectData, Tasks } from "../types/data";

interface INewFieldTasks {
  tasks: Tasks;
}

type NewField = Partial<IProjectData>;

export const projectsApi = createApi({
  reducerPath: "projectsApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3001/" }),
  tagTypes: ["Projects"],

  endpoints: (build) => ({
    getData: build.query<IProjectData[], string[]>({
      query: ([userId, id]) =>
        `projects?userId=${userId ? `${userId}` : ""}${id ? `&id=${id}` : ""}`,
      providesTags: (result) =>
        result
          ? [
              ...result.map(({ id }) => ({ type: "Projects" as const, id })),
              { type: "Projects", id: "LIST" },
            ]
          : [{ type: "Projects", id: "LIST" }],
    }),
    getSingleData: build.query<IProjectData[], string | undefined>({
      query: (id) => `projects?id=${id}`,
      providesTags: (result) =>
        result
          ? [
              ...result.map(({ id }) => ({ type: "Projects" as const, id })),
              { type: "Projects", id: "LIST" },
            ]
          : [{ type: "Projects", id: "LIST" }],
    }),
    // добавление нового проэкта
    addProject: build.mutation<void, IProjectData>({
      query: (body) => ({
        url: "projects",
        method: "POST",
        body,
      }),
      invalidatesTags: [{ type: "Projects", id: "LIST" }],
    }),
    // изменение поля
    patchData: build.mutation<void, [string, NewField]>({
      query: ([id, newField]) => ({
        url: `projects/${id}`,
        method: "PATCH",
        body: newField,
      }),
      invalidatesTags: [{ type: "Projects", id: "LIST" }],
    }),
    // удаление проекта
    deleteProject: build.mutation<void, string>({
      query: (id) => ({
        url: `projects/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: [{ type: "Projects", id: "LIST" }],
    }),
  }),
});

export const {
  useGetDataQuery,
  useGetSingleDataQuery,
  usePatchDataMutation,
  useDeleteProjectMutation,
  useAddProjectMutation,
} = projectsApi;
