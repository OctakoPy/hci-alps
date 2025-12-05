import { Link } from "react-router-dom";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface PageNavigationProps {
  previous?: { title: string; path: string };
  next?: { title: string; path: string };
}

const PageNavigation = ({ previous, next }: PageNavigationProps) => {
  return (
    <div className="flex items-center justify-between py-12 border-t border-border">
      <div className="flex-1">
        {previous && (
          <Link to={previous.path}>
            <Button variant="ghost" className="group">
              <ChevronLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
              <div className="text-left">
                <div className="text-xs text-muted-foreground">Previous</div>
                <div className="font-semibold">{previous.title}</div>
              </div>
            </Button>
          </Link>
        )}
      </div>
      
      <div className="flex-1 flex justify-end">
        {next && (
          <Link to={next.path}>
            <Button variant="ghost" className="group">
              <div className="text-right">
                <div className="text-xs text-muted-foreground">Next</div>
                <div className="font-semibold">{next.title}</div>
              </div>
              <ChevronRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default PageNavigation;
