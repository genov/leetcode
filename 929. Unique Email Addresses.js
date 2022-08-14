/**
 * 929. Unique Email Addresses
 * https://leetcode.com/problems/unique-email-addresses/
 */
var numUniqueEmails = function (emails) {
  const set = new Set();
  const sanitize = (name) => name.split("+")[0].split(".").join("");

  for (let i = 0; i < emails.length; i++) {
    const email = emails[i];
    const [local, domain] = email.split("@");
    const address = sanitize(local);
    set.add(address + "@" + domain);
  }

  return set.size;
};
