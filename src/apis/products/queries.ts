import { QueryClient, useQuery } from "@tanstack/react-query"
import { getProduct, getProducts } from "./services"
import { LoaderFunctionArgs, defer, useLoaderData } from "react-router-dom"

export const productsQuery = {
  queryKey: ['products'],
  queryFn: async () => getProducts(),
}

export const productQuery = (id?: string) => ({
  queryKey: ['product', id],
  queryFn: async () => getProduct(id),
})

// // Without deferred data - so, it will wait until the reponse
// export const productsLoader = (queryClient: QueryClient) => async () => {
//   return await queryClient.ensureQueryData(productsQuery)
// }

export const productsLoader = (queryClient: QueryClient) => () => {
  /* Returning might not be helpful here as we are using queryClient when accessing */
  return defer({ products: queryClient.ensureQueryData(productsQuery) })
}

export const productLoader = (queryClient: QueryClient) => async ({ params }: LoaderFunctionArgs) => {
  return await queryClient.ensureQueryData(productQuery(params?.id))
}

export function useGetProducts() {
  /* useSuspenseQuery can be used to utilize suspense and error boundary of react-router route level */
  return useQuery({
    ...productsQuery,
  })
}

export function useGetProduct(id: string) {
  const initialData = useLoaderData() as Awaited<
    ReturnType<ReturnType<typeof productLoader>>>


  return useQuery({
    ...productQuery(id),
    initialData,
  })
}