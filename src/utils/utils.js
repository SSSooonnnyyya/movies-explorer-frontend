export function apiError(err) {
    console.log(err); 
}

export function showValidationError(event) {
    if (!event.target.checkValidity()) {
        event.target.reportValidity();
      }
}