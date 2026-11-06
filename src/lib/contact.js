/**
 * Submits a contact form message.
 *
 * TODO: This is currently mocked (resolves after a short delay and never
 * leaves the browser). Before launch, replace the body of this function
 * with a real integration, for example:
 *   - POST to your own API route / serverless function, which then emails you
 *   - A form backend such as Formspree (https://formspree.io) or Getform
 *   - A transactional email API such as EmailJS or Resend, called from here
 *
 * Whatever you choose, keep the same signature (`{ name, email, message }`
 * in, a Promise that rejects on failure out) so `Contact.jsx` doesn't need
 * to change.
 */
export async function submitContactForm({ name, email, message }) {
  await new Promise((resolve) => setTimeout(resolve, 600));

  // Simulated network failure hook for local testing:
  // throw new Error("Network error");

  console.info("[contact] mock submission (wire up a real backend):", {
    name,
    email,
    message,
  });

  return { ok: true };
}
