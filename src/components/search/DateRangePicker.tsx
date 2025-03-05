import React, { useState } from "react";
import { addDays, format } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";
import { DateRange } from "react-day-picker";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

interface DateRangePickerProps {
  className?: string;
  onChange?: (dateRange: DateRange | undefined) => void;
  initialDateRange?: DateRange;
  placeholder?: string;
}

const DateRangePicker = ({
  className,
  onChange,
  initialDateRange,
  placeholder = "Select check-in and check-out dates",
}: DateRangePickerProps) => {
  // Default date range (today to 7 days from now)
  const defaultDateRange: DateRange = {
    from: new Date(),
    to: addDays(new Date(), 7),
  };

  const [dateRange, setDateRange] = useState<DateRange | undefined>(
    initialDateRange || defaultDateRange,
  );

  const handleSelect = (range: DateRange | undefined) => {
    setDateRange(range);
    if (onChange) {
      onChange(range);
    }
  };

  return (
    <div className={cn("bg-white rounded-md", className)}>
      <Popover>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            className={cn(
              "w-full justify-start text-left font-normal h-12 border-2 hover:bg-background",
              !dateRange && "text-muted-foreground",
            )}
          >
            <CalendarIcon className="mr-2 h-4 w-4" />
            {dateRange?.from ? (
              dateRange.to ? (
                <span className="text-sm">
                  {format(dateRange.from, "MMM dd, yyyy")} -{" "}
                  {format(dateRange.to, "MMM dd, yyyy")}
                </span>
              ) : (
                <span className="text-sm">
                  {format(dateRange.from, "MMM dd, yyyy")}
                </span>
              )
            ) : (
              <span className="text-sm text-muted-foreground">
                {placeholder}
              </span>
            )}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0" align="center">
          <Calendar
            initialFocus
            mode="range"
            defaultMonth={dateRange?.from}
            selected={dateRange}
            onSelect={handleSelect}
            numberOfMonths={2}
            className="rounded-md border bg-card p-3"
          />
          <div className="p-3 border-t flex justify-between items-center">
            <div className="text-sm text-muted-foreground">
              {dateRange?.from && dateRange?.to && (
                <span>
                  {Math.ceil(
                    (dateRange.to.getTime() - dateRange.from.getTime()) /
                      (1000 * 60 * 60 * 24),
                  )}{" "}
                  nights
                </span>
              )}
            </div>
            <Button
              size="sm"
              onClick={() => {
                handleSelect(undefined);
              }}
              variant="outline"
            >
              Reset
            </Button>
          </div>
        </PopoverContent>
      </Popover>
    </div>
  );
};

export default DateRangePicker;
