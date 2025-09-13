import { fail } from '@sveltejs/kit';

export const actions = {
	create: async ({ cookies, request, fetch }) => {
		const data = await request.formData();

		try {
      const res = await fetch("/v1/user/create", {
        method: "POST",
        body: data
      });

      return await res.json();
		} catch (error) {
      console.log(error);
			return fail(422, {
				description: data.get(""),
				error: "an unexpected error occurred"
			});
		}
	}
};