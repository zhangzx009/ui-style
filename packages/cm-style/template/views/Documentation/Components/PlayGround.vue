<template>
    <div class="container">
        <div class="section demo">
            <div class="tag is-primary">留言卡</div>
            <article class="media">
                <figure class="media-left">
                    <p class="image is-64x64">
                        <img src="https://bulma.io/images/placeholders/128x128.png" class="is-rounded">
                    </p>
                </figure>
                <div class="media-content">
                    <div class="content">
                        <p>
                            <strong>John Smith</strong> <small>@johnsmith</small> <small>31m</small>
                            <br>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros, eu pellentesque tortor vestibulum ut. Maecenas non massa sem. Etiam finibus odio quis feugiat facilisis.
                        </p>
                    </div>
                </div>
                <div class="media-right">
                    <button class="delete"></button>
                </div>
            </article>
        </div>
        <div class="section demo">
            <div class="tag is-primary">警告</div>
            <article class="message is-warning">
                <div class="message-header">
                    <p>Hello World</p>
                    <button class="delete" aria-label="delete"></button>
                </div>
                <div class="message-body">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. <strong>Pellentesque risus mi</strong>, tempus quis placerat ut, porta nec nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida purus diam, et dictum <a>felis venenatis</a> efficitur. Aenean ac <em>eleifend lacus</em>, in mollis lectus. Donec sodales, arcu et sollicitudin porttitor, tortor urna tempor ligula, id porttitor mi magna a neque. Donec dui urna, vehicula et sem eget, facilisis sodales sem.
                </div>
            </article>
        </div>
        <div class="section demo">
            <div class="tag is-primary">modal</div>
            <div class="modal">
                <div class="modal-background"></div>
                <div class="modal-content">
                    <p class="image is-4by3">
                        <img src="https://bulma.io/images/placeholders/1280x960.png" alt="">
                    </p>
                </div>
                <button class="modal-close is-large" aria-label="close"></button>
            </div>
        </div>
        <div class="section demo">
            <div class="tag is-primary">按钮</div>
            <div class="buttons">
                <button class="button is-primary">Primary</button>
                <button class="button is-link">Link</button>
            </div>

            <div class="buttons">
                <button class="button is-info">Info</button>
                <button class="button is-success">Success</button>
                <button class="button is-warning">Warning</button>
                <button class="button is-danger">Danger</button>
            </div>
            <div class="buttons">
            <button class="button is-small is-fullwidth">Small</button>
            <button class="button is-fullwidth" disabled>Normal</button>
            <button class="button is-medium is-primary is-fullwidth">Medium</button>
            <button class="button is-link is-loading is-rounded" disabled>Large</button>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "PlayGround"
    }
</script>

<style>
    .demo {
        background: white;
        margin-top: 2px;;
    }
    .tag{
        margin: 1em auto;
    }

</style>
