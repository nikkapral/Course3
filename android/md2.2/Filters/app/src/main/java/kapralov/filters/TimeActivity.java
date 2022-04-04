package kapralov.filters;

import android.annotation.SuppressLint;
import android.os.Bundle;
import android.widget.TextView;

import androidx.appcompat.app.AppCompatActivity;

import java.text.SimpleDateFormat;
import java.util.Date;



public class TimeActivity extends AppCompatActivity {

    TextView tvTime;
    TextView tvText;
    String time;
    SimpleDateFormat sdf;

    @SuppressLint("SimpleDateFormat")
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_time);

        sdf = new SimpleDateFormat("HH:mm:ss");
        time = sdf.format(new Date(System.currentTimeMillis()));
        tvTime = findViewById(R.id.tvDate);
        tvTime.setText(time);

        tvText = findViewById(R.id.tvView);

    }

}