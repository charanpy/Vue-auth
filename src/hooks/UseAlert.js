import { reactive, toRefs } from 'vue';

const useAlert = (initialValue) => {
  const error = reactive({
    message: initialValue,
  });

  const updateError = (err) => {
    error.message = err;
  };

  return {
    updateError,
    ...toRefs(error),
  };
};

export default useAlert;
