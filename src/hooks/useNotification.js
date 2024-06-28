import Swal from 'sweetalert2';

const useNotification = () => {
  const notify = (message, type = 'success') => {
    Swal.fire({
      text: message,
      icon: type,
      timer: 3000,
      showConfirmButton: false,
      timerProgressBar: true,
      position: 'top-end',
      toast: true,
    });
  };

  return notify;
};

export default useNotification;
