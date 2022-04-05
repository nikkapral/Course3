package kapralov.filters;

import androidx.activity.result.ActivityResultLauncher;
import androidx.activity.result.contract.ActivityResultContracts;
import androidx.annotation.NonNull;
import androidx.appcompat.app.AppCompatActivity;

import android.content.Intent;
import android.graphics.Color;
import android.net.Uri;
import android.os.Bundle;
import android.view.Gravity;
import android.view.View;
import android.widget.EditText;
import android.widget.LinearLayout;
import android.widget.RelativeLayout;
import android.widget.Switch;
import android.widget.TextView;

public class MainActivity extends AppCompatActivity {

    TextView tvName;
    ActivityResultLauncher<Intent> startActivityForResult;
    ActivityResultLauncher<Intent> startActivityForChange;

    @Override
    protected void onCreate(Bundle savedInstanceState) {

        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
        tvName = findViewById(R.id.tvName);
        TextView tvChange = findViewById(R.id.tvChange);


        startActivityForResult = registerForActivityResult(
                new ActivityResultContracts.StartActivityForResult(),
                result -> {
                    if (result.getResultCode() == AppCompatActivity.RESULT_OK) {
                        Intent data = result.getData();
                        if (data == null) {
                            return;
                        }
                        String name = data.getStringExtra("name");
                        tvName.setText("Your name is " + name);
                    }
                }
        );

        startActivityForChange = registerForActivityResult(
                new ActivityResultContracts.StartActivityForResult(),
                result -> {
                    if (result.getResultCode() == AppCompatActivity.RESULT_OK) {
                        Intent data = result.getData();
                        if (data == null) {
                            return;
                        }
                        String color = data.getStringExtra("color");
                        String position = data.getStringExtra("position");
                        tvChange.setTextColor(Color.parseColor(color));
                        System.out.println(position);
                        switch(position){
                            case "Left":
                                tvChange.setGravity(Gravity.LEFT);
                                break;
                            case "Middle":
                                tvChange.setGravity(Gravity.CENTER);
                                break;
                            case "Right":
                                tvChange.setGravity(Gravity.RIGHT);
                                break;
                        }

                    }
                }
        );
    }

    public void onClick(@NonNull View v) {
        Intent intent;
        EditText lastName = (EditText) findViewById(R.id.etLName);
        EditText request = (EditText) findViewById(R.id.etRequest);


        switch(v.getId()) {
            case R.id.btnTime:
                intent = new Intent("kapralov.filters.intent.action.showtime");
                intent.putExtra("lastName",lastName.getText().toString());
                startActivity(intent);
                break;
            case R.id.btnDate:
                intent = new Intent("kapralov.filters.intent.action.showdate");
                startActivity(intent);
                break;
            case R.id.btnName:
                intent = new Intent(this, NameActivity.class);
                startActivityForResult(intent, 1);
                break;
            case R.id.btnRequest:
                String requestText = request.getText().toString();
                intent = new Intent(Intent.ACTION_VIEW, Uri.parse(createRequest(requestText)));
                startActivity(intent);
            case R.id.btnChange:
                intent = new Intent(this, SetTextOptionsActivity.class);
                startActivityForResult(intent, 1);

        }
    }

    public String createRequest(String preRequest){
        String engine = "https://yandex.ru/search/?text=";
        return engine + preRequest.trim().replaceAll(" ","+");
    }


    public void getValueButtonClicked(View view) {
        Intent intent = new Intent(this, NameActivity.class);
        startActivityForResult.launch(intent);
    }

    public void changeValueButtonClicked(View view) {
        Intent intent = new Intent(this, SetTextOptionsActivity.class);
        startActivityForChange.launch(intent);
    }













}