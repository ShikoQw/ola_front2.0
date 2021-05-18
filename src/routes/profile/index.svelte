<script context="module">
    export function load({session}) {
        if(!session.session_token){
            return {
                status: 302,
                redirect: '/auth/unauthorized'
            }
        }else{
            return{
                props: {
                    session_token: session.session_token
                }
            }
        }
    }
</script>

Profile