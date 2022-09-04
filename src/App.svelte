<script lang="ts">
    import Header from './components/Header.svelte'
    import Router from './components/Router.svelte'
    import Footer from './components/Footer.svelte'

    import './styles/main.css'
</script>

<div class="lg:h-screen bg-zinc-900 text-white">
    <header class="bg-zinc-800">
        <Header />
    </header>
    
    <main class="mt-10 px-2">
        <Router />
    </main>
    
    
    <div class="bg-zinc-800 lg:absolute bottom-0 left-0 right-0 text-center">
        <Footer />
    </div>
</div>
