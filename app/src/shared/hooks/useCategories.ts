import { AxiosResponse } from "axios";
import { setCategoriesData } from "../../store/reducers/categoriesReducer";
import { api, endpoints } from "../api";
import { useAppDispatch } from "./typesHook";
import React from "react";
import { ICategoryID } from "../interfaces/interfaces";
import { setError, setIsLoading } from "../../store/reducers/dataQuizReducer";

export const useCategories = () => {
     const dispatch = useAppDispatch();
     const [categoriesNameID, setCategoriesNameID] = React.useState<ICategoryID[]>([]);

     //load array with ID of every category
     const loadCategories = async () => {
          dispatch(setIsLoading(true));
          const response: AxiosResponse = await api.get(endpoints.getCategoryIds);
          const categories: ICategoryID[] = response.data.trivia_categories;
          setCategoriesNameID(categories);
     };

     const getEveryCategoriesFullData = async () => {
          try {
               const response = await Promise.all<any>(
                    categoriesNameID?.map(({ id }) =>
                         api.get(endpoints.getCategoryInfo, {
                              params: {
                                   category: id,
                              },
                         })
                    )
               );
               const categories = response.map(({ data }) => data);
               dispatch(setCategoriesData(categories));
          } catch (e: any) {
               dispatch(setError(e.message));
          } finally {
               dispatch(setIsLoading(false));
          }
     };

     React.useEffect(() => {
          if (categoriesNameID.length) {
               getEveryCategoriesFullData();
          }
     }, [categoriesNameID]);

     React.useEffect(() => {
          loadCategories();
     }, []);

     return { getEveryCategoriesFullData, categoriesNameID: [{ id: 0, name: "Any" }, ...categoriesNameID] };
};
