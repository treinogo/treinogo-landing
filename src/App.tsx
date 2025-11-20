import { useState, useEffect } from "react";
import { Hero } from "./components/Hero";
import { Benefits } from "./components/Benefits";
import { Pricing } from "./components/Pricing";
import { Testimonials } from "./components/Testimonials";
import { Blog } from "./components/Blog";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Login } from "./components/Login";
import { SignUp } from "./components/SignUp";
import { SuccessScreen } from "./components/SuccessScreen";
import { BlogPost } from "./components/BlogPost";
import { BlogHome } from "./components/BlogHome";
import { Contact } from "./components/Contact";
import { About } from "./components/About";
import { toast } from "sonner";
import { Toaster } from "./components/ui/sonner";

type PageType = "home" | "login" | "signup" | "success" | "blog-post" | "blog-home" | "contact" | "about";

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageType>("home");
  const [currentPostId, setCurrentPostId] = useState<string>("");

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const message = urlParams.get('message');

    if (message) {
      toast.error(decodeURIComponent(message));
      setCurrentPage('login');
      window.history.replaceState({}, document.title, window.location.pathname);
    }
  }, []);

  const handleReadPost = (postId: string) => {
    setCurrentPostId(postId);
    setCurrentPage("blog-post");
  };

  if (currentPage === "login") {
    return <Login onSignUpClick={() => setCurrentPage("signup")} />;
  }

  if (currentPage === "signup") {
    return (
      <SignUp
        onSuccess={() => setCurrentPage("success")}
        onBackToLogin={() => setCurrentPage("login")}
      />
    );
  }

  if (currentPage === "success") {
    return <SuccessScreen onBackToLogin={() => setCurrentPage("login")} />;
  }

  if (currentPage === "blog-post") {
    return (
      <BlogPost
        postId={currentPostId}
        onBack={() => setCurrentPage("blog-home")}
        onReadPost={handleReadPost}
      />
    );
  }

  if (currentPage === "blog-home") {
    return (
      <BlogHome
        onBack={() => setCurrentPage("home")}
        onReadPost={handleReadPost}
      />
    );
  }

  if (currentPage === "contact") {
    return <Contact onBack={() => setCurrentPage("home")} />;
  }

  if (currentPage === "about") {
    return (
      <About
        onBack={() => setCurrentPage("home")}
        onContactClick={() => setCurrentPage("contact")}
      />
    );
  }

  return (
    <>
      <div className="min-h-screen bg-white">
        <Header
          onLoginClick={() => setCurrentPage("login")}
          onSignUpClick={() => setCurrentPage("signup")}
          onAboutClick={() => setCurrentPage("about")}
          onContactClick={() => setCurrentPage("contact")}
          onBlogClick={() => setCurrentPage("blog-home")}
        />
        <main>
          <Hero onSignUpClick={() => setCurrentPage("signup")} />
          <Benefits />
          <Pricing onContactClick={() => setCurrentPage("contact")} />
          <Testimonials />
          <Blog
            onReadPost={handleReadPost}
            onViewAll={() => setCurrentPage("blog-home")}
          />
        </main>
        <Footer />
      </div>
      <Toaster position="top-right" richColors closeButton />
    </>
  );
}
