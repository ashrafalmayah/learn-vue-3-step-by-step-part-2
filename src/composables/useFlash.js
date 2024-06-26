import swal from 'sweetalert'

export function useFlash() {
  function flash(title, message, icon = 'success') {
    swal(title, message, icon)
  }

  return { flash }
}
